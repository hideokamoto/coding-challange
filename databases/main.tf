variable "region"        { default = "ap-northeast-1" }
provider "aws" {
  region = "${var.region}"
}
