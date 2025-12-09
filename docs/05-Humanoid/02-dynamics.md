# Chapter 2: Humanoid Robot Dynamics

## 2.1 Introduction to Dynamics

Dynamics is the study of motion and the forces that cause it. In humanoid robotics, dynamics involves analyzing the forces, torques, and inertial properties that govern the robot's movement and interaction with its environment.

### 2.1.1 Newton-Euler vs. Lagrangian Formulation

Two primary approaches to robot dynamics are the Newton-Euler formulation (which is iterative and works from link to link) and the Lagrangian formulation (which uses energy principles).

#### 2.1.1.1 Equations of Motion

The equations of motion describe the relationship between the applied forces/torques, the robot's inertial properties, and its resulting accelerations. These are essential for control and simulation.

##### 2.1.1.1.1 Mass and Inertia Properties

Accurate models of each link's mass, center of mass, and inertia tensor are critical for realistic dynamic simulation and effective control.

###### 2.1.1.1.1.1 Gravity Compensation

Gravity compensation is a control technique that applies torques to joints to counteract the gravitational forces acting on the robot, making it easier to control.

## 2.2 Control of Humanoid Robots

Controlling the complex dynamics of humanoid robots requires sophisticated control strategies to achieve stable and agile movements.

### 2.2.1 Joint-Space Control

Joint-space control directly manipulates the torques or positions of individual joints, often using PID (Proportional-Integral-Derivative) controllers to track desired joint trajectories.

#### 2.2.1.1 Operational-Space Control

Operational-space control focuses on controlling the forces and motions of the end-effectors in Cartesian space, allowing for more intuitive task-level control.

##### 2.2.1.1.1 Whole-Body Control

Whole-body control coordinates the movements of all joints and limbs to achieve overall robot behaviors, often incorporating redundancy and optimizing for various criteria (e.g., balance, posture).

###### 2.2.1.1.1.1 Compliance and Impedance Control

Compliance and impedance control strategies allow robots to react flexibly to external forces, making them safer for human interaction and more robust to environmental uncertainties.
