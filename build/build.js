#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

const options = {
  padding: 3,
  margin: 1,
  borderStyle: 'double'
};

const data = {
  name: chalk.cyan('              Erno Salo'),
  username: chalk.cyan('Endormi'),
  work: chalk.white('Software Developer'),
  opensource: chalk.white('Dev Isle Maintainer and Contributor to many'),
  website: chalk.cyan('https://endormi.io'),
  github: chalk.gray('https://github.com/') + chalk.cyan('endormi'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('ernosalo'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan('~endormi'),
  pypi: chalk.gray('https://pypi.org/user/') + chalk.cyan('endormi'),
  wt: chalk.white.bold(' Work Title:'),
  os: chalk.white.bold('Open Source:'),
  wb: chalk.white.bold('    Website:'),
  gh: chalk.white.bold('     GitHub:'),
  li: chalk.white.bold('   LinkedIn:'),
  np: chalk.white.bold('        NPM:'),
  py: chalk.white.bold('       PyPI:'),
};

const newline = '\n';
const heading = `${data.name} - ${data.username}`;
const title = `${data.wt}  ${data.work}`;
const _os_ = `${data.os}  ${data.opensource}`;
const web_link = `${data.wb}  ${data.website}`;
const gh_link = `${data.gh}  ${data.github}`;
const li_link = `${data.li}  ${data.linkedin}`;
const npm_link = `${data.np}  ${data.npm}`;
const pypi_link = `${data.py}  ${data.pypi}`;

const out = heading +
               newline + newline +
               title + newline +
               _os_ + newline +
               web_link + newline + newline +
               gh_link + newline +
               li_link + newline +
               npm_link + newline +
               pypi_link + newline

fs.writeFileSync(path.join(__dirname, '../bin/output'), chalk.cyan(boxen(out, options)));
