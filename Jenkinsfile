pipeline {
    agent any
    stages {
        stage("install&&confug nginx") {
            steps {
                sh "sudo apt-get update"
                sh "sudo apt-get install -y nginx"
                sh "sudo touch /etc/nginx/sites-available/domain.com.conf"
                sh "sudo touch /etc/nginx/sites-available/api.domain.com.conf"
                sh "sudo su"
                sh "sudo chmod 777 /etc/nginx/sites-available/"
                /*sh """echo server { 
                                server_name domain.com www.domain.com;
                                location / {
                                        proxy_pass http://localhost:4200;
                                        proxy_http_version 1.1;
                                        proxy_set_header Upgrade $http_upgrade;
                                        proxy_set_header Connection 'upgrade';
                                        proxy_set_header Host $host;
                                        proxy_cache_bypass $http_upgrade;
                                    }
                    } >> /etc/nginx/sites-available/domain.com.conf""" */
                sh "sudo ln -s /etc/nginx/sites-available/api.domain.com.conf /etc/nginx/sites-enabled/api.domain.com.conf"
                sh "sudo ln -s /etc/nginx/sites-available/domain.com.conf /etc/nginx/sites-enabled/domain.com.conf"
                sh "sudo systemctl start nginx"

            }

        stage("pm2") {
            steps {
                sh "sudo npm i -g pm2"
                sh "pm2 startup"
                sh "sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER –hp /home/$USER"
            }

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