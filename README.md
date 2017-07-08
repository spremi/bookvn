# BookVn
BookVn = Book + वन (pronounced _one_ - meaning forest/ woods/ jungle).
It is a simple NodeJS application to host a copy of school notes in the
home network.
Take pictures and upload to the server and view any time later.
Comes in handy when kids forget their notebooks in school; or the pages
get damaged by food, drinks, pets, ...

> **Stability** Beta

> **Skills** Administrator.

## Features
### Available
1. Hierarchical view of notebooks by subject, book and chapter.
2. Zoom and pan the images.
3. No database. Simple JSON files.

### Planned
1. Support related videos and PDF documents.
2. Ability to add content within application. No JSON editing.

### Important
BookVn is specifically designed for use within home network, where
the clients are trusted.
Security and privacy aren't the prime concerns here.

## Installation
### Instal dependencies
NodeJS v6.11.0 LTS (as of 08 JUl 2017) is recommended.

Being a NodeJS application, it is expected to cross-platform. Choose
appropriate installer from [the download page](https://nodejs.org/en/download/)
and follow instructions.

### Install package
Download the release package & extract contents to a directory of your choice.
On SELinux enabled systems, location already labelled `httpd_user_content_t`
is recommended.

#### On Linux

> I use Fedora in my home network. Instructions below, may need to be tweaked
for other distributions.

>Almost all commands require `sudo` or `root` privileges.

1. Create a user and group 'bookvn'.
   * OR, choose another non-root user to own the application and content.
2. Ensure the package directory is owned by designated user:group e.g.
```bash
$ chown -R bookvn:bookvn /home/www/bookvn
```
3. Review these lines in `server/deploy/systemd/bookvn.service`.
* Change path to NodeJS executable and application, if necessary.
```
ExecStart=/opt/node/v6.11.0/bin/node /home/www/bookvn/server/app.js
```
* Change the `user` and `group`, based on your choice above.
```
User=bookvn
Group=bookvn
```
* Change the port number, if desired.
```
Environment=NODE_ENV=production PORT=9900
```
4. Ensure that selected port is _open_ in the firewall.
```bash
$ firewall-cmd --get-default-zone
public
$
$ firewall-cmd --permanent --zone=public --add-port=9900/tcp
$ firewall-cmd --reload
```
5. Copy `server/deploy/systemd/bookvn.service` to `systemd` directory.
```bash
$ cp server/deploy/systemd/bookvn.service /etc/systemd/system/multi-user.target.wants/.
```
6. Enable service to start automatically on subsequent restarts.
```bash
$ systemctl enable bookvn.service
```
7. Start the service.
```bash
$ systemctl start bookvn.service
```

#### On Windows
TODO

## Get started
Start the browser and enter the url (including port) to the installed machine e.g.
  * http://localhost:9900/
  * http://192.168.1.100:9900/

Dummy data is pre-installed to let you preview and verify the application.

> Until, next release data must be populated manually.
> Files in sample data can be used as easy reference.

### Adding content
The actual data is stored in the directory `server/assets/cabinet` as shown below.
```
`-- subject-id
    `-- book-id
        |-- pg-001.jpg
        |-- pg-002.jpg
        ...
        ...
```
Corresponsing meta data is stored in the directory `server/assets/cabinet/info` as shown below.
```
|-- sample
|   |-- book1-chapters.json
|   `-- books.json
`-- subjects.json
```

#### Configure subjects
List of subjects is configured in the JSON file:
  * `server/assets/info/subjects.json`.

#### Configure books
List of books is configured in a JSON file per subject:
  * `server/assets/info/<subject-id>/books.json`.

#### Configure chapters
List of chapters is configured in a JSON file per subject:
  * `server/assets/info/<subject-id>/<book-id>-chapters.json`.

## License
BSD-3-Clause Copyright [Sanjeev Premi](https://github.com/spremi)
