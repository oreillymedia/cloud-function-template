##### Google projects
 We have many GCP projects. Here is the list of them.  Developers should use playground for all of their testing. You should not create new projects.  Prod, QA and Dev have deployment pipelines to deploy cloud functions.
+
 Playground (strong-keyword-184513)
+
 experimental environment for all service proof of concepts
+
 Platform-Dev (platform-dev-788014)
+
 development environment for automated deployments and initial testing
+
 Platform-QA (platform-qa-953425)
+
 Qa environment for integration tests
+
 Platform-Prod (platform-prod-399563)
+
 Production environment
 
 #### Step 2
 
 ##### Install gcloud cli
 
 https://cloud.google.com/sdk/downloads
+
 Once the tar.gz is installed initialize your gcloud...
 
 ```bash
 gcloud init
 ```
 
 Choose account to perform operations for this configuration
+
 Select your O’Reilly domain name
+
 Pick cloud project to use
+
 Select project for playground (strong-keyword-184513)
+
 Do you want to configure a default Compute Region and Zone?
+
 Answer Yes
+
 Set region zone to (us-central1-a)
 
 ##### Update components and enable beta
@@ -54,11 +69,13 @@ gcloud beta functions list --project platform-dev-788014 --zone us-west1-b
 ##### Setup node.js
 
 Install nvm
+
 https://github.com/creationix/nvm#installation
 
 Google Cloud Functions only support node.js v6.11.5 as of 3/12/2018
 
 Install node.js v6.11.5
+
 ```bash
 nvm install 6.11.5
 ```
@@ -74,7 +91,10 @@ nvm use 6.11.5
 https://serverless.com/
 
 Install with npm
+
+```bash
 npm install serverless -g
+```
 
 This will install serverless into the nvm env, if you wish to have it available in your standard path
 
@@ -83,29 +103,40 @@ ln -fs /Users/{user_name}/.nvm/versions/node/v{node_version}/bin/serverless /usr
 ```
 
 Run the tool
+
 serverless --version
 
 Serverless authentication
+
 A keyfile.json is necessary to deploy serverless functions in our playground project
 
 Go to the API Credentials page in GCP
+
 https://console.cloud.google.com/apis/credentials?project=strong-keyword-184513&organizationId=887495730325
 
 Select Create Credentials
+
 Select Service Account Key
+
 Under Service Account select the “serverless” service account
+
 Ensure JSON is selected
+
 Press Create
 
 A json file will download, move it to ~/.gcloud/keyfile.json
 
 #### Step 5
 
 ##### Install cloud-function-emulator
+
 https://cloud.google.com/functions/docs/emulator
 
 Install with npm
+
+```bash
 npm install -g @google-cloud/functions-emulator
+```
 
 Run the tool (some shells will have a conflict with the default functions, use functions-emulator)