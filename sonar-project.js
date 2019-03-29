const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
	     serverUrl: 'http://104.154.253.128:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'packages/core/src/**' // Entry point of your code
       }
     }, () => {});
