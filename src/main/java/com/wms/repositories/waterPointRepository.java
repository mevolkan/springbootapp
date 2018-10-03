package com.wms.repositories;

import com.djamware.react.models.WaterPoint;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<WaterPoint, String> {
    @Override
    void delete(WaterPoint deleted);
}