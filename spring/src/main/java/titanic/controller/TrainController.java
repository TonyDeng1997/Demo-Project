package titanic.controller;

import org.springframework.web.bind.annotation.RestController;


import titanic.model.Train;
import titanic.repository.TrainRepository;

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
public class TrainController {
    @Autowired
    TrainRepository trainRepository;
    
    //test index end point
    @GetMapping(value = "/")
    public String Home() {
        return "Home Page";
    }
    
    //get all entry from train table
    @GetMapping(value = "/getTrainTable")
    public List<Train> getAll() {
        return trainRepository.findAll();
    }
    
    //save an entry into train table
    @PostMapping(value="/saveTrainEntry")
    public Train save(@RequestBody Train train) {
        return trainRepository.save(train);
    }
    
    //update an entry in train table with passengerId
    @PostMapping(value="/updateTrainEntry")
    public int update(@RequestBody Train train) {

        return trainRepository.updateTrain(train.getPassengerId(), train.getPclass(), train.getSurvived(), train.getName(), train.getSex(), train.getAge(), train.getSibsp(), train.getParch(), train.getTicket(),train.getFare(), train.getCabin(), train.getEmbarked());
    }
    
    //delete an entry in train table
    @DeleteMapping("/TrainTable/{id}")
    public void deleteTrain(@PathVariable long id) {
    	System.out.println(id);
    	trainRepository.deleteById(id);
    }
    
}
