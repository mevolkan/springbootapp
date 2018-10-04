package com.wms.repositories;

import com.wms.models.WaterPoint;
import org.springframework.data.repository.CrudRepository;

public interface waterPointRepository extends CrudRepository<WaterPoint, String> {
    @Override
    void delete(WaterPoint deleted);
}