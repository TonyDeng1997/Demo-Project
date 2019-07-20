package titanic.controller;

import org.springframework.web.bind.annotation.RestController;

import titanic.model.GenderSubmission;
import titanic.model.Train;
import titanic.repository.GenderSubmissionRepository;
import titanic.repository.TrainRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
@CrossOrigin
@RestController
public class GenderSubmissionController {
    @Autowired
    GenderSubmissionRepository genderRepository;
    
    //Get all entry from gender table
    @GetMapping(value = "/getGenderTable")
    public List<GenderSubmission> getAll() {
        return genderRepository.findAll();
    }
    
    //save an entry into gender table
    @PostMapping(value="/saveGenderEntry")
    public GenderSubmission save(@RequestBody GenderSubmission gender) {
        return genderRepository.save(gender);
    }

    //update gender entry with passengerId
    @PostMapping(value="/updateGenderEntry")
    public int update(@RequestBody GenderSubmission gender) {

        return genderRepository.updateGender(gender.getPassengerId(), gender.getSurvived());
    }
    
    //delete an entry from gender table
    @DeleteMapping("/GenderTable/{id}")
    public void deleteTest(@PathVariable long id) {
    	System.out.println(id);
    	genderRepository.deleteById(id);
    }
    
}
