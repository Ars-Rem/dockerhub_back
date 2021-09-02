pipeline {
    agent any
    stages {
        stage("install") {
            steps {
                sh "npm install pm2@latest -g"
            }
        }
        stage('back-upload') {
            steps {
                sh "ssh test2@192.168.3.233 sudo mkdir /var/www/test.com/html"
                sh "sudo chmod 777 /var/www/test.com/html"
                sh "rsync --archive /var/lib/jenkins/workspace/back-te_main test2@192.168.3.233:/var/www/test.com/html"
            }
        }

        stage("start_app") {
            steps {
                sh "pm2 start app.js"
            }
        }

    }
}