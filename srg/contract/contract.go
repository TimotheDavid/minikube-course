package contract

import (
	us "github.com/srg/service/user"
)


type Crud interface {
	Add() (error)
	Update(id int) error
	Remove(id int) error
	Get(id int) (us.User, error)
	GetAll() ([]us.User, error)
}




