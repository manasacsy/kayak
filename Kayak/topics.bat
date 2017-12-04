@echo off
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getHotels_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic filterHotels_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic login_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getRooms_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getFlights_topicgetFlights_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic filterFlights_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getcars_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic bookcar_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic cancelcar_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic filtercar_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic addTravelerInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic addPaymentInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic hotelBooking_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic deleteHotelBooking_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic flightBooking_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Flights_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic PostFlights_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic setReview_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getReviews_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic deleteFlightBooking_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic PostHotels_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Hotels_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic signup_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getTravelerInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getPaymentInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic deletePaymentInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic editPaymentInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllBookings_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic userinfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getuserinfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic RevenueGraphs_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic PostCars_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic cars_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic PostHotels_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Hotels_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic PostFlights_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Flights_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic deleteTravelerInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic editTravelerInfo_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllBookingsByDate_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllBookingsByMonthYear_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllBookingsForAdmin_topic
start cmd /c  C:/kafka-1.0.0-src/bin/windows/kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllUsers_topic
exit