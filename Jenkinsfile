pipeline {
    agent any

    stages {
        stage('Clone'){
        steps{
            git 'https://github.com/laibazahid085/devops-project'
        }
    }
    stage('Build Docker Image'){
        steps{
            sh 'docker build -t laibazahid/devops-project .'
        }
    }
    stage('Push Image'){
        step{
            sh 'docker push laibazahid085/devops-project'
        }
    }
    stage('Deploy to Kubernetes'){
        step{
            sh 'kubectl apply -f deployment.yaml'
            sh 'kubectl apply -f service.yaml'
        }
    }

  }

}