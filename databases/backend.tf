terraform {
  backend "s3" {
    bucket = "serverless.ap-northeast-1.hideokamoto.deploys"
    key    = "terraform/coding-challenge/terraform.tfstate"
    region = "ap-northeast-1"
  }
}
