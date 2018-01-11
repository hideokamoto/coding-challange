
resource "aws_dynamodb_table" "DepartureWeekday-outbound" {
  name           = "DepartureWeekday-outbound"
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
    type = "N"
  }
  tags {
    Usage = "subway-kyoto"
  }
}

resource "aws_dynamodb_table" "DepartureWeekday-inbound" {
  name           = "DepartureWeekday-inbound"
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
    type = "N"
  }
  tags {
    Usage = "subway-kyoto"
  }
}

resource "aws_dynamodb_table" "DepartureHoliday-outbound" {
  name           = "DepartureHoliday-outbound"
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
    type = "N"
  }
  tags {
    Usage = "subway-kyoto"
  }
}

resource "aws_dynamodb_table" "DepartureHoliday-inbound" {
  name           = "DepartureHoliday-inbound"
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
    type = "N"
  }
  tags {
    Usage = "subway-kyoto"
  }
}
