package com.wms.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "waterPoints")
public class WaterPoint {
    @Id
    String waterPointID;
    String name;
    String location;
    String latitude;
    String longitude;
    String capacity;

    public waterPoint() {
    }

    public waterPoint(String name, String location, String latitude, String longitude, String capacity) {
        this.name = name;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.capacity = capacity;
    }

    public String getwaterPointID() {
        return waterPointID;
    }

    public vowaterPointID setwaterPointID(String waterPointID) {
        this.waterPointID = waterPointID;
    }

    public String getName() {
        return name;
    }

    public vowaterPointID setName(String name) {
        this.name = name;
    }

    public String getocation() {
        return location;
    }

    public vowaterPointID setLocation(String location) {
        this.location = location;
    }

    public String getLatitude() {
        return latitude;
    }

    public vowaterPointID setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public vowaterPointID setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getCapacity() {
        return capacity;
    }

    public vowaterPointID setCapacity(String capacity) {
        this.capacity = capacity;
    }
}
