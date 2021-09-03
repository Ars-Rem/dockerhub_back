pipeline {
    agent any
    stages {
        stage ("install nginx") {
            steps {
                sh "sudo apt-get update"
                sh "sudo apt-get install -y nginx"
                //sh "sudo apt-get install nginx -y"
            }
        }
        stage("install after") {
            steps {

                sh "sudo su"
                sh "npm install"
                sh "npm install pm2@latest -g"
                
                sh "npm install nodejs"
            }
        }
        stage('back-upload') {
            steps {
                sh "sudo su"
                //sh "ssh test2@192.168.3.233 mkdir -p /var/www/test.com/html/"
                //sh "ssh test2@192.168.3.233 sudo chmod 777 /var/www/test.com/html"
                //sh "rsync --archive /var/lib/jenkins/workspace/back-te_main/* test2@192.168.3.233:/var/www/test.com/html"
                sh "rsync --archive /var/lib/jenkins/workspace/back-te_main/* test2@192.168.3.233:/var/www/html"
            }
        }

        stage("start_app") {
            steps {
                sh "pm2 start app.js"
                //sh "pm2 start all"
            }
        }

    }
}