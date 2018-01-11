
resource "aws_dynamodb_table" "DepartureWeekday" {
  name           = "DepartureWeekday"
  read_capacity  = 10
  write_capacity = 5
  hash_key       = "station_name"
  range_key      = "departure_timestamp"
  attribute {
    name = "station_name"
    type = "S"
  }
  attribute {
    name = "departure_timestamp"
    type = "S"
  }
  attribute {
    name = "line_type"
    type = "S"
  }
  global_secondary_index {
    name               = "station_name-line_type-index"
    hash_key           = "station_name"
    range_key          = "line_type"
    write_capacity     = 5
    read_capacity      = 5
    projection_type    = "ALL"
    non_key_attributes = []
  }
  tags {
    Usage = "subway-kyoto"
  }
}

resource "aws_dynamodb_table" "DepartureHoliday" {
  name           = "DepartureHoliday"
  read_capacity  = 10
  write_capacity = 5
  hash_key       = "station_name"
  range_key      = "departure_timestamp"
  attribute {
    name = "station_name"
    type = "S"
  }
  attribute {
    name = "departure_timestamp"
    type = "S"
  }
  attribute {
    name = "line_type"
    type = "S"
  }
  global_secondary_index {
    name               = "station_name-line_type-index"
    hash_key           = "station_name"
    range_key          = "line_type"
    write_capacity     = 5
    read_capacity      = 5
    projection_type    = "ALL"
    non_key_attributes = []
  }
  tags {
    Usage = "subway-kyoto"
  }
}
