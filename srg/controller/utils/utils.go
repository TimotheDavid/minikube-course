package controller

import (
	"strings"


)


func GetParams(id int, url string ) string {

	s := strings.Split(url, "/")
	
	return s[id]
}