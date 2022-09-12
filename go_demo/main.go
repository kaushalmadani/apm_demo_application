package main

import (
	"godemo/gin_demo"
	"godemo/mux_demo"
	"os"
)

func main() {
	if len(os.Args) > 1 {
		serverType := os.Args[1]
		if serverType != "" {
			if serverType == "gin" {
				gin_demo.RunGinDemo()
			} else if serverType == "mux" {
				mux_demo.RunMuxDemo()
			}
		}
	} else {
		panic("Pass server type in command line")
	}
}
