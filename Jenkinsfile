pipeline {
    agent any
    stages {
        stage('back-upload') {
            steps {
                sh "rsync --archive /var/lib/jenkins/workspace/"
            }
        }
    }
}