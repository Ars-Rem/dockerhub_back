/*pipeline {
    agent any

    stages {
        stage('back-upload') {
            steps {
                sh "sudo su"
                sh "rsync --archive /var/lib/jenkins/workspace/back/* test2@192.168.3.233:/var/www/back"
            }
        }

        stage("start_app") {
            steps {
                sh "ssh test2@192.168.3.233 pm2 -f start /var/www/back/app.js"
            }
        }

    }
}*/

pipeline {
    agent any
    stages {
        stage('docker-build-back') {
            steps {
                sh "sudo chmod 666 /var/run/docker.sock"
                sh "docker build -t ${NAME}/docker_back:back_c ."
            }
        }

        stage('docker-run-back') {
            steps {
                //sh "docker stop \$(docker ps -a -q)"
                //sh "docker rm \$(docker ps -a -q)"
                //sh "docker rmi -f \$(docker images -a -q)"
                sh "docker stop back"
                sh "docker rm back"
                sh "docker run -d --name back -p 81:4735 ${NAME}/docker_back:back_c"
                }
            }
        
        
        stage('docker-push-app') {
            steps {
                sh "docker commit back ${NAME}/docker_back:back_c"
                sh "docker login -u ${NAME} -p ${PASS} docker.io"
                sh "docker push ${NAME}/docker_back:back_c"
            }
        }
    }        
}

