


//jshint ignore: start

pragma solidity ^0.4.0;

contract StudyBlock {
    
    
    string[] public studies;
    
    mapping(address => uint[]) userStudies;
    mapping(uint => address[]) studyParticipants;
    mapping(uint => mapping(address => string[])) studyData;
    
    
    function StudyBlock() {
        studies.push("Fitbit Study");
        studies.push("Jawbone Study");
        studies.push("Apple Watch Study");
    }
    
    function joinStudy(uint which) {
        userStudies[msg.sender].push(which);
        studyParticipants[which].push(msg.sender);
    }
    
    function getStudyName(uint which) returns (string) {
        return studies[which];
    }
    
    function findOwnStudies() returns (uint[]) {
        return userStudies[msg.sender];
    }
    
    function uploadDataset(uint study, string hash) {
        studyData[study][msg.sender].push(hash);
    }
    
    function getStudyParticipants(uint study) returns (address[]) {
        return studyParticipants[study];
    }
    
    function getDatasetCount(uint study, address who) returns (uint) {
        return studyData[study][who].length;
    }
    
    function getDataset(uint study, address who, uint which) returns (string) {
        return studyData[study][who][which];
    }
    
    
}
//jshint ignore: end