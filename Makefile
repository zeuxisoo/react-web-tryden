all:
	@echo
	@echo "Command        : Description"
	@echo "-------------- : ------------------"
	@echo "make favicon   : Convert the png to ico"
	@echo

favicon:
	ffmpeg -i ./public/favicon.png ./public/favicon.ico
