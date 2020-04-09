package com.javaAngularProject.tasks.service;

import com.javaAngularProject.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

}
