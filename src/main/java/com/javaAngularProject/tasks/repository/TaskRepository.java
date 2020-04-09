package com.javaAngularProject.tasks.repository;

import com.javaAngularProject.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {



}
