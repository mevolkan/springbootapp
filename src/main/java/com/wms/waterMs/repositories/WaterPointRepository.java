package com.wms.waterMs.repositories;

import com.wms.waterMs.models.WaterPoint;
import org.springframework.data.repository.CrudRepository;

public interface WaterPointRepository extends CrudRepository<WaterPoint, String> {
    @Override
    void delete(WaterPoint deleted);
}