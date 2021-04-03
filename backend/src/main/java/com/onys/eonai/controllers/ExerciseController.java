package com.onys.eonai.controllers;

import com.onys.eonai.models.Exercise;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    private List<Exercise> exercises = new ArrayList<>();
    private Long newId = 0L;

    @GetMapping
    public List<Exercise> list() {
        return exercises;
    }

    @PostMapping
    public Exercise create(@RequestBody Exercise exercise) {
        exercise.setId(generateId());
        exercises.add(exercise);

        return exercise;
    }

    private Long generateId() {
        newId += 1;
        return newId;
    }
}
