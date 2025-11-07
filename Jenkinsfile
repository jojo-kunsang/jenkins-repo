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
                sh 'sudo rm -rf /var/www/darjeeling-cab-react/*'
                sh 'sudo cp -r build /* /var/www/darjeeling-cab-react'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}
