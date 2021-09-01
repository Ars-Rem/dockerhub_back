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
                sh "rsync --archive /var/lib/jenkins/workspace/back-te_main test2@192.168.3.233:/var/www/html"
            }
        }

        stage("start_app") {
            steps {
                sh "pm2 start app.js"
            }
        }

    }
}