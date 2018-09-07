(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{169:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("Version")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker version\ndocker info\n")])])]),a("p",[a("strong",[t._v("Network")])]),t._v(" "),a("ul",[a("li",[t._v("Docker uses "),a("code",[t._v("docker0")]),t._v(" virtual bridge interface. Each new container gets one interface automatically attached to the "),a("code",[t._v("docker0")]),t._v(" virtual bridge.")]),t._v(" "),a("li",[t._v("Create network that other container will attach to and will be visible via name: "),a("code",[t._v("docker network create -d bridge my-net")]),t._v(" ("),a("code",[t._v("-d")]),t._v(" Network Driver: bridge)")]),t._v(" "),a("li",[t._v("Attach container to custom network: "),a("code",[t._v("docker run --network my-net ...")])])]),t._v(" "),a("p",[a("strong",[t._v("Socket")]),a("br"),t._v("\nDocker socket from within a container: "),a("code",[t._v("-v /run/docker.sock:/run/docker.sock")])]),t._v(" "),a("p",[a("strong",[t._v("Manage Docker as a non-root user")]),t._v("\nThe docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user root and other users can only access it using sudo. The docker daemon always runs as the root user.")]),t._v(" "),a("p",[t._v("If you don’t want to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.")]),t._v(" "),a("ul",[a("li",[t._v("Add the docker group if it doesn't already exist:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n")])])]),a("ul",[a("li",[t._v('Add the connected user "$USER" to the docker group. Change the user name to match your preferred user if you do not want to use your current user:')])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gpasswd -a "),a("span",{attrs:{class:"token variable"}},[t._v("$USER")]),t._v(" docker\n")])])]),a("ul",[a("li",[a("p",[t._v("Log out/in to activate the changes to groups.")])]),t._v(" "),a("li",[a("p",[t._v("You can use "),a("code",[t._v("docker run hello-world")]),t._v(" to check if you can run docker without sudo.")])])]),t._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),a("p",[t._v("Better way of installing things when building docker images:")]),t._v(" "),a("div",{staticClass:"language-Bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("RUN "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -ex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# Fail when exit status not 0, print each command (debug)")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \\\n\t"),a("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y --no-install-recommends \\\n")])])]),a("h2",{attrs:{id:"build-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-push","aria-hidden":"true"}},[t._v("#")]),t._v(" Build & Push")]),t._v(" "),a("p",[t._v("Run docker build inside a directory containing single file called "),a("strong",[t._v("Dockerfile")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Command")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("What it does")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("docker build -t Registry/Image:tag .")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Build Docker image (-t with tag)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker build -t registry/image:tag registry/image:another_tag .")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Build image and use multiple tags")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker build -f Dockerfile_custom -t docker.mot-solutions.com/msi/sessionmanager .")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specify custom Dockerfile")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker push docker.mot-solutions.com/msi/sessionmanager")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Push built image to registry")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker build --no-cache ...")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Force Docker to clean rebuild every layer")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker tag 0e5574283393 fedora/httpd:version1.0")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tag an image referenced by ID")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker tag httpd fedora/httpd:version1.0")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tag an image referenced by Name")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker tag httpd:test fedora/httpd:version1.0.test")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tag an image referenced by Name and Tag")])])])]),t._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("docker run ...")]),t._v(" "),a("th",[t._v("Explained")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("-d")])]),t._v(" "),a("td",[t._v("In background, detached")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--name some-name")])]),t._v(" "),a("td",[t._v("Use some-name for container Name")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-ti")])]),t._v(" "),a("td",[t._v("Interactive, with pseudo terminal")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-p HOST:CONTAINER")])]),t._v(" "),a("td",[t._v("Port mapping Ex. "),a("code",[t._v("-p 8080:80")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--rm")])]),t._v(" "),a("td",[t._v("Remove after container stops")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--privileged")])]),t._v(" "),a("td",[t._v("Disable SELinux protection for this container")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ctrl+p ctrl+q")])]),t._v(" "),a("td",[t._v("Detach from container without stopping it")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-v")])]),t._v(" "),a("td",[t._v("Volume Mapping Ex. "),a("code",[t._v("-v ${PWD}/config:/config")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-v /run/docker.sock:/run/docker.sock")])]),t._v(" "),a("td",[t._v("Map Docker socket")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--network my-net")])]),t._v(" "),a("td",[t._v('Use "my-net" network')])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--restart")])]),t._v(" "),a("td",[t._v("Specify restart policy: no, on-failure, always, unless-stopped")])])])]),t._v(" "),a("p",[a("strong",[t._v("Examples:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# RUN")]),t._v("\ndocker run -d --name my_container -v "),a("span",{attrs:{class:"token variable"}},[t._v("$PWD")]),t._v(":/directory image:tag "),a("span",{attrs:{class:"token comment"}},[t._v("# Detached (in background)")]),t._v("\ndocker run -it image:tag "),a("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# Run bash shell inside of a container")]),t._v("\ndocker run -d alpine:latest sh -c "),a("span",{attrs:{class:"token string"}},[t._v("'while true; do date; sleep 1; done'")]),t._v("\ndocker run -p 8080:80 --name -e VAR"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Value my_container image:tag  "),a("span",{attrs:{class:"token comment"}},[t._v("# docker run -p 8080:80")]),t._v("\ndocker run --restart"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("always redis\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# COPY")]),t._v("\ndocker "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" foo.txt mycontainer:/foo.txt                        "),a("span",{attrs:{class:"token comment"}},[t._v("# Copy from host to container")]),t._v("\ndocker "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" mycontainer:/foo.txt foo.txt                        "),a("span",{attrs:{class:"token comment"}},[t._v("# Copy form container to host")]),t._v("\n")])])]),a("h2",{attrs:{id:"manage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage","aria-hidden":"true"}},[t._v("#")]),t._v(" Manage")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Command")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("What it does")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("docker newtork ls")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("List Docker networks")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker volume ls")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("List Docker volumes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker ps")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show running containers")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker ps -a")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show all containers (including stopped)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker exec -it <my_container> bash")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Attach to a running container with BASH shell")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker kill <my_container>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Kill running container")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker rm <my_container>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Remove the container (including data inside)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker stats")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show Docker container system stats (CPU, Mem, IOs)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker stats <my_container>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show stats for a single container")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker logs <my_container>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show logs from a container")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker inspect <my_container>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Return low-level information on Docker objects in JSON format")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker history <image>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show the history of an image")])])])]),t._v(" "),a("h2",{attrs:{id:"system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system","aria-hidden":"true"}},[t._v("#")]),t._v(" System")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Command")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("What it does")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("docker system df")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Show Docker disk usage")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker system info")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Display system-wide information")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("docker system prune")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Remove unused data")])])])]),t._v(" "),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker-Compose")]),t._v(" "),a("p",[t._v("User version 2 over version 3. The version 3 is used when using docker swarm and removes syntax used in version 2.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("What it does")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Command")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Stand Up docker-compose.yml stack")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("docker-compose up -d")])])]),t._v(" "),a("tr",[a("td",[t._v("Restart single service from docker-compose.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("docker-compose restart <service>")])])]),t._v(" "),a("tr",[a("td",[t._v("Add service to docker-compose.yml and start it")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("docker-compose up -d --no-recreate")])])])])]),t._v(" "),a("h3",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[t._v("#")]),t._v(" Logs")]),t._v(" "),a("p",[t._v("Show last 100 logs from docker-compose deployment")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker-compose logs\n-f            "),a("span",{attrs:{class:"token comment"}},[t._v("# Follow log output")]),t._v("\n-t            "),a("span",{attrs:{class:"token comment"}},[t._v("# Show timestamps")]),t._v("\n--tail"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("# Number of lines to show from the end of the logs")]),t._v("\n              "),a("span",{attrs:{class:"token comment"}},[t._v("# for each container")]),t._v("\n")])])]),a("h2",{attrs:{id:"tips-tricks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-tricks","aria-hidden":"true"}},[t._v("#")]),t._v(" Tips & Tricks")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# ALIASES in .bashrc or .zshrc")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("alias")]),t._v(" dps"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'docker ps --format \"table {{.Names}}\\t{{.Image}}\\t{{.Ports}}\"'")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="docker.md";e.default=o.exports}}]);