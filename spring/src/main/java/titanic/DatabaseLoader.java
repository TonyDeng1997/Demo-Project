/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package titanic;

import java.io.File;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

import titanic.model.GenderSubmission;
import titanic.model.Test;
import titanic.model.Train;
import titanic.repository.GenderSubmissionRepository;
import titanic.repository.TestRepository;
import titanic.repository.TrainRepository;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Component
public class DatabaseLoader implements CommandLineRunner {
	
	private final GenderSubmissionRepository genderSubmission;
	private final TestRepository testRepository;
	private final TrainRepository trainRepository;
	
	
	public <T> List<T> loadObjectList(Class<T> type, String fileName) {
	    try {
	        CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
	        CsvMapper mapper = new CsvMapper();
	        File file = new File(fileName);
			MappingIterator<T> readValues = 
	          mapper.reader(type).with(bootstrapSchema).readValues(file);
	        return readValues.readAll();
	    } catch (Exception e) {
	       System.out.println(e.getMessage());
	    }
		return null;
	}

	

	@Autowired
	public DatabaseLoader(GenderSubmissionRepository genderSubmission,TestRepository testRepository, TrainRepository trainRepository) {
		this.genderSubmission = genderSubmission;
		this.testRepository = testRepository;
		this.trainRepository = trainRepository;

	}

	@Override
	public void run(String... strings) throws Exception {
		
		 
       
		List<GenderSubmission> genderList = loadObjectList(GenderSubmission.class,"data/gender_submission.csv");
		List<Test> testList =  loadObjectList(Test.class,"data/test.csv");
		genderSubmission.saveAll(genderList);
		testRepository.saveAll(testList);
		List<Train> trainList =  loadObjectList(Train.class,"data/train.csv");
		trainRepository.saveAll(trainList);
	}
		
	
}