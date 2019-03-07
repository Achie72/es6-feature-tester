# es6-feature-tester

**Feature list:**  
Based on [http://es6-features.org](http://es6-features.org), and modified to only contain mostly just the tested feature and it's enviroment. Some of these tests contained other features described in other tests (mostly `let` and `const`).   

**Testrunner:**  
A simple python script, that is using [pytablewriter](https://github.com/thombashi/pytablewriter) to write it's `.md` files for each engine. These were combined to acquire tables below. 
The python script simply calls the current engine with the given feature `.js` file, and checks if the return `?$` was 0 or not. Because all tests contain asserts for the valid results, only false recognition should appear in the system.

# Dependencies
- python
- pytablewriter
  - `pip install pytablewriter`

# Usage
```
git clone
cd es6-feature-tester
chmod +x test_features.py
```
After this, open the script and modify this part:
```
ENGINE = "yourenginepath"
FEATURE_DIR = "features"
```
Edit the ENGINE variable to point to your engine, you want to test.
Then type:
```
./test_features.py
```

The results will be printed on the terminal, and be generated into a `FEATURES.md` file, in the directory, you executed the program.

# Further down the line

You can basically run any kind of feature tests on your engine, but the engine was made for the following dirctory tree:
```
├── feature_root
|   ├── sub_feature_list_1
|   |   ├ feature_1.js
|   |   └ feature_2.js
|   ├── sub_feature_list_2
|   |   └ feature_1.js
.   .   .
```
