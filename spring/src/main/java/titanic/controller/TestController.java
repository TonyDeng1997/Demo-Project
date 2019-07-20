package titanic.controller;

import org.springframework.web.bind.annotation.RestController;

import titanic.model.GenderSubmission;
import titanic.model.Test;
import titanic.model.Train;
import titanic.repository.TestRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@CrossOrigin
@RestController
public class TestController {
    @Autowired
    TestRepository testRepository;
    
    
    //Get all test table entry from database
    @GetMapping(value = "/getTestTable")
    public List<Test> getAll() {
        return testRepository.findAll();
    }
    
    //save a test entry
    @PostMapping(value="/saveTestEntry")
    public Test save(@RequestBody Test test) {
        return testRepository.save(test);
    }
    
    //update a test entry with passengerId
    @PostMapping(value="/updateTestEntry")
    public int update(@RequestBody Train train) {

        return testRepository.updateTest(train.getPassengerId(), train.getPclass(), train.getName(), train.getSex(), train.getAge(), train.getSibsp(), train.getParch(), train.getTicket(),train.getFare(), train.getCabin(), train.getEmbarked());
    }
    
    //delete an entry with passengerId
    @DeleteMapping("/TestTable/{id}")
    public void deleteTest(@PathVariable long id) {
    	System.out.println(id);
    	testRepository.deleteById(id);
    }
    
}
