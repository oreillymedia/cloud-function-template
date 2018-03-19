# cloud-function-template

## How to setup, write, test and deploy your own google cloud function

### Prepare your local machine

#### Step 1

##### Google projects
We have many GCP projects. Here is the list of them.  Developers should use playground for all of their testing. You should not create new projects.  Prod, QA and Dev have deployment pipelines to deploy cloud functions.

Playground (strong-keyword-184513)

experimental environment for all service proof of concepts

Platform-Dev (platform-dev-788014)

development environment for automated deployments and initial testing

Platform-QA (platform-qa-953425)

Qa environment for integration tests

Platform-Prod (platform-prod-399563)

Production environment

#### Step 2

##### Install gcloud cli

https://cloud.google.com/sdk/downloads

Once the tar.gz is installed initialize your gcloud...

```bash
gcloud init
```

Choose account to perform operations for this configuration

Select your O’Reilly domain name

Pick cloud project to use

Select project for playground (strong-keyword-184513)

Do you want to configure a default Compute Region and Zone?

Answer Yes

Set region zone to (us-central1-a)

##### Update components and enable beta

```bash
gcloud components update && gcloud components install beta
```

Init again to edit these settings or add other configurations

Also you can override your project and zone with the --project and --zone options

Example to list functions from non-default project and zone
gcloud beta functions list --project platform-dev-788014 --zone us-west1-b

#### Step 3

##### Setup node.js

Install nvm

https://github.com/creationix/nvm#installation

Google Cloud Functions only support node.js v6.11.5 as of 3/12/2018

Install node.js v6.11.5

```bash
nvm install 6.11.5
```

```bash
nvm use 6.11.5
```

#### Step 4

##### Install serverless framework

https://serverless.com/

Install with npm

```bash
npm install serverless -g
```

This will install serverless into the nvm env, if you wish to have it available in your standard path

```bash
ln -fs /Users/{user_name}/.nvm/versions/node/v{node_version}/bin/serverless /usr/local/bin 
```

Run the tool

serverless --version

Serverless authentication

A keyfile.json is necessary to deploy serverless functions in our playground project

Go to the API Credentials page in GCP

https://console.cloud.google.com/apis/credentials?project=strong-keyword-184513&organizationId=887495730325

Select Create Credentials

Select Service Account Key

Under Service Account select the “serverless” service account

Ensure JSON is selected

Press Create

A json file will download, move it to ~/.gcloud/keyfile.json

#### Step 5

##### Install cloud-function-emulator

https://cloud.google.com/functions/docs/emulator

Install with npm

```bash
npm install -g @google-cloud/functions-emulator
```

Run the tool (some shells will have a conflict with the default functions, use functions-emulator)

```bash
functions-emulator --help
```

### Creating a serverless project

When starting a new serverless project first consider what feature or service your function will serve.  Check to see if a serverless project already exists for that feature or service.  If not create a new project using the ORM project template.

Create a function from the ORM template 
Pull down the ORM cloud function template and give it a unique named directory
serverless install --url https://github.com/oreillymedia/cloud-function-template --name {name_of_your_serverless_project}

You now have the ORM default template for google cloud functions installed in your directory.  This includes a .gitignore, .eslintrc, .gcloudignore, README.md, index.js, package.json, serverless.yml, as well as a tests and functions directories.

Update package.json including name, version, description, tests, and dependencies

Update serverless.yml including service name, function name(s) and provider project fields.

Update README.md to describe the service your functions will serve.

Once set git init and create a repo in git oreillymedia organization and push your initial commit.

### Developing a function

During the development lifecycle we are using node 6.11.5 and es6 as standards for writing.  ESlint and jest are standards for linting and testing.

Notice in the project template there is a functions directory, this stores the set of functions that server a similar feature or service.  By default there are 2 sample functions httpHelloWorld and eventHelloWorld.  http* is triggered by a web request while event is triggered by pubsub events.

We can use google-cloud-emulator to deploy and test a function locally to ensure it is working as expected.  Serverless offers this with their invoke local method but it does not support google cloud functions… yet.

Start the emulator

```bash
functions-emulator start
```

Deploy the exported function name with an http trigger (as opposed to pub/sub event trigger)

```bash
functions-emulator deploy {my_function} --trigger-http
```

Call the deployed function

```bash
functions-emulator call {my_function}
```

Inspect the function from a browser

```bash
functions-emulator inspect {my_function}
```

View logs to get the Debugger url

```bash
functions_emulator logs read
```

You will see output like...
Debugger listening on ws://127.0.0.1:9229/fb9906cd-a063-42ba-bcf2-af04fc2e2655

Copy and paste the url to your browser and call the function.  You can now see vars, step through code and inspect your function to the fullest. 

Turn off inspection

```bash
functions_emulator reset {my_function}
```

Stop the emulator

```bash
functions-emulator stop
```

### Deploying a function

Deploy your function
As you prepare to deploy functions be sure you are only deploying to playground from your local computer.  Dev, QA and Prod will have deployments based on git hooks.

Serverless framework can deploy functions to gcp, aws, kubeless, and many more.  With a simple change of the serverless.yml this function can be running in multiple clouds.

First package your functions to ensure they compile and package properly, find the results in the .serverless directory

```bash
serverless package
```

Once your function is tested with functions-emulator and receive the proper output you can push it to the serverless provider set in your serverless.yml

```bash
serverless deploy
```

Once deployed you can now get back logs from your function

```bash
serverless logs -f my_function
```

Serverless Plugins:
Serverless framework allows us to use, or create, plugins to facilitate certain tasks.

By default our cloud-function-template uses serverless-google-cloudfunctions, but there are others that may be beneficial.  To use a plugin they must be installed in the package.json AND referenced in the serverless.yml file plugins.

List available plugins

```bash
serverless plugins list
```
