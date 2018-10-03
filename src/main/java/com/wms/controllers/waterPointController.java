package com.wms.controllers;

import com.djamware.react.models.WaterPoint;
import com.djamware.react.repositories.WaterPointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
public class waterPointController {

    @Autowired
    waterPointRepository waterPointRepository;

    @RequestMapping(method=RequestMethod.GET, value="/waterPoints")
    public Iterable<WaterPoint> waterpoint() {
        return waterPointRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/waterPoints")
    public WaterPoint save(@RequestBody WaterPoint waterpoint) {
        waterPointRepository.save(waterpoint);

        return waterpoint;
    }

    @RequestMapping(method=RequestMethod.GET, value="/waterPoints/{id}")
    public Optional<WaterPoint> show(@PathVariable String id) {
        return waterPointRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/waterPoints/{id}")
    public WaterPoint update(@PathVariable String id, @RequestBody WaterPoint waterpoint) {
        Optional<WaterPoint> optWaterPoint = waterPointRepository.findById(id);
        WaterPoint c = optWaterPoint.get();
        if(waterpoint.getName() != null)
            c.setName(waterpoint.getName());
        if(waterpoint.getLocation() != null)
            c.setLocation(waterpoint.getLocation());
        if(waterpoint.getLatitude() != null)
            c.setLatitude(waterpoint.getLatitude());
        if(waterpoint.getLongitude() != null)
            c.setLongitude(waterpoint.getLongitude());
        if(waterpoint.getCapacity() != null)
            c.setCapacity(waterpoint.getCapacity());
        waterPointRepository.save(c);
        return c;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/waterPoints/{id}")
    public String delete(@PathVariable String id) {
        Optional<WaterPoint> optWaterPoint = waterPointRepository.findById(id);
        WaterPoint waterpoint = optWaterPoint.get();
        waterPointRepository.delete(waterpoint);

        return "";
    }
}
