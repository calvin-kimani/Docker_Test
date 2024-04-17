pipeline {
    agent any
    
    options {
        // Set up GitHub webhook
        buildDiscarder(logRotator(numToKeepStr: '10'))
        triggers {
            githubPush()
        }
    }
    
    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.build('your_image_name:latest', '-f Dockerfile .')
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_credentials_id') {
                        docker.image('your_image_name:latest').push('latest')
                    }
                }
            }
        }
    }
}
