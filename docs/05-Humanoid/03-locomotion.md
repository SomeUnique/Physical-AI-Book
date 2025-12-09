# Chapter 3: Humanoid Robot Locomotion

## 3.1 Principles of Bipedal Locomotion

Bipedal locomotion, or walking on two legs, is a complex challenge for humanoid robots, requiring careful control of balance, gait generation, and foot placement.

### 3.1.1 Zero Moment Point (ZMP)

The ZMP is a key concept in bipedal locomotion, representing the point on the ground where the net moment of all forces (gravity, inertial, contact) is zero. Keeping the ZMP within the support polygon is essential for stability.

#### 3.1.1.1 Capture Point

The Capture Point is another stability criterion that predicts where the robot's center of mass would need to be in order to achieve a stable stop. It's used for dynamic balance control.

##### 3.1.1.1.1 Support Polygon

The support polygon is the convex hull of all contact points between the robot's feet (or other contact points) and the ground. The ZMP must remain within this polygon for static stability.

###### 3.1.1.1.1.1 Gait Generation

Gait generation involves planning the sequence of foot movements and body posture to achieve stable and efficient walking, often using rhythmic patterns and phase-based control.

## 3.2 Advanced Locomotion Strategies

Beyond basic walking, advanced locomotion strategies enable humanoids to navigate challenging terrains, handle external disturbances, and perform more agile movements.

### 3.2.1 Balance Control

Sophisticated balance control algorithms (e.g., model predictive control, impedance control) are used to maintain stability during walking, running, and interaction with the environment.

#### 3.2.1.1 Terrain Adaptation

Humanoids need to adapt their locomotion strategies to different terrains (e.g., uneven ground, stairs, slopes), often using foot force control and compliant joints to absorb impacts.

##### 3.2.1.1.1 Dynamic Walking and Running

Dynamic walking and running gaits leverage the robot's inertia and momentum to achieve more efficient and faster locomotion, moving beyond quasi-static stability.

###### 3.2.1.1.1.1 Human-like Gaits

Research often focuses on generating more human-like gaits, which are not only aesthetically pleasing but can also improve energy efficiency and robustness.
