package com.wms.waterMs.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "waterpoints")
public class WaterPoint {
    @Id
    String id;
    String name;
    String location;
    String latitude;
    String longitude;
    String capacity;

    public WaterPoint() {
    }

    public WaterPoint(String name, String location, String latitude, String longitude, String capacity) {
        this.name = name;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.capacity = capacity;
    }

    public String getId() {
        return id;
    }

    public void Id(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getCapacity() {
        return capacity;
    }

    public void  setCapacity(String capacity) {
        this.capacity = capacity;
    }
}
