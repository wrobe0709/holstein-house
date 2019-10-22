#!/bin/bash
ansible-playbook -vvvv ./deploy.yml --private-key=/Users/Will/Desktop/Programming/holstein-house/keys/holstein-deploy -u deployer -i ./hosts