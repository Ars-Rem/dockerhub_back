pipeline {
    agent any

    stages {
        stage('back-upload') {
            steps {
                sh "sudo su"
                sh "rsync --archive /back-react-coding-challenge-api-master/* test2@192.168.3.233:/var/www/back"
            }
        }

        stage("start_app") {
            steps {
                sh "ssh test2@192.168.3.233 pm2 -f start /var/www/back/app.js"
            }
        }

    }
}