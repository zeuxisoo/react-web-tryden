all:
	@echo
	@echo "Command        : Description"
	@echo "-------------- : ------------------"
	@echo "make server    : Start the development server"
	@echo "make favicon   : Convert the png to ico"
	@echo "make build     : Build the project"
	@echo

server:
	@yarn start

favicon:
	@ffmpeg -i ./public/favicon.png ./public/favicon.ico

build: favicon
	@yarn build
