pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                sh '''
                    sudo rm -rf /var/www/darjeeling-cab-react/*
                    sudo cp -r dist /* /var/www/darjeeling-cab-react
                    sudo systemctl restart nginx
                '''
            }
        }
    }
}
