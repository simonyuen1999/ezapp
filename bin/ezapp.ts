#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EzappStack } from '../lib/ezapp-stack';

const app = new cdk.App();
new EzappStack(app, 'EzappStack', {});