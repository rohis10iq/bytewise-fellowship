### Week 08:
#### Day 01: Version Control with Git and GitHub

##### Version Control with Git
- **Git** is a distributed version control system that tracks changes in source code during software development.
- It allows multiple developers to work on a project simultaneously without interfering with each other's work.
- **Key Features**:
  - Track changes over time.
  - Revert to previous states.
  - Work on different branches.
  - Collaborate with others.

##### GitHub
- **GitHub** is a web-based platform that uses Git for version control and offers additional features for collaboration.
- **Key Features**:
  - Host repositories.
  - Issue tracking.
  - Pull requests.
  - Actions for CI/CD.
  - Project management tools.

#### Day 02: Setup Git on Your Computer

##### Installing Git
- **Windows**: Download the installer from [git-scm.com](https://git-scm.com/) and follow the installation instructions.
- **macOS**: Install via Homebrew with `brew install git`.
- **Linux**: Use the package manager, e.g., `sudo apt-get install git` for Debian-based distributions.

##### Configuring Git
- Set up your identity:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "youremail@example.com"
    ```

#### Day 03: GitHub Intro and Features

##### Introduction to GitHub
- **GitHub** is a platform for hosting and reviewing code, managing projects, and collaborating with others.

##### Basic Features
- **Repositories**: Storage spaces for your projects.
- **Branches**: Parallel versions of your project.
- **Commits**: Snapshots of changes.
- **Pull Requests**: Proposed changes to a repository.
- **Issues**: Track tasks, enhancements, and bugs.


###### [GitHub Skills](https://github.com/skills/introduction-to-github)


#### Day 04: Setting Up SSH on Local Machines

##### Introduction to SSH
- **SSH (Secure Shell)**: A protocol for secure remote login and other secure network services over an insecure network.

##### Setting Up SSH on Your Local Machine

1. **Generate SSH Key Pair**:
    ```bash
    ssh-keygen -t rsa -b 4096 -C "youremail@example.com"
    ```
    - Follow the prompts to save the key pair and set a passphrase.

2. **Add SSH Key to the SSH Agent**:
    ```bash
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa
    ```

3. **Add SSH Key to GitHub**:
    - Copy the SSH key to your clipboard:
        ```bash
        cat ~/.ssh/id_rsa.pub
        ```
    - Go to [GitHub SSH Settings](https://github.com/settings/keys) and add a new SSH key.

4. **Test the SSH Connection**:
    ```bash
    ssh -T git@github.com
    ```
    - If successful, you should see a message saying you have authenticated successfully.


