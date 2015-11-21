# bounty

This is a project undertaken by the Gainesville Dev Academy in an attempt to claim a bounty from Study Edge. This form aims to create a single resource that holds programs from Alachua and Bradford county, to create a searchable, managable database of said programs.

### Installation

1) Git pull to a server

2) Run npm install

3) You need mongod, if you don't have it set that up. Same for Gulp if you want to use it's dev tools.

4) If you'd like to use gulp to minify the code run "gulp build"

### Gulpfile

The gulpfile has some basic server tests to help with future development. "gulp tests" will run all current tests, which currently only check the server's get and post routes. You can also run "gulp hints" to look through all user generated JavaScript and check for syntax errors.

The gulpfile also has the ability to concat and minify the entire project to help speed up load times. Running "gulp build" will copy all files into a "/build" directory and minify all custom code in the project. 
