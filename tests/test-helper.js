import Application from 'benrosas/app'
import config from 'benrosas/config/environment'
import { setApplication } from '@ember/test-helpers'
import { start } from 'ember-qunit'

setApplication(Application.create(config.APP))

start()
