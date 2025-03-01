import React from "react";

const Dashboard = () => {
  // Sample data (replace with actual data from backend)
  const progressData = {
    completedLessons: 12,
    totalLessons: 20,
    completedQuizzes: 5,
    totalQuizzes: 10,
  };

  const achievements = [
    { id: 1, name: "Quiz Master", icon: "🏆" },
    { id: 2, name: "Lesson Explorer", icon: "🌍" },
    { id: 3, name: "Mentor Seeker", icon: "👩‍🏫" },
  ];

  const upcomingTasks = [
    { id: 1, task: "Complete Lesson 13: Advanced React", dueDate: "2023-11-05" },
    { id: 2, task: "Take Quiz 6: JavaScript Basics", dueDate: "2023-11-07" },
    { id: 3, task: "Mentor Session: Career Guidance", dueDate: "2023-11-10" },
  ];

  // Calculate progress percentage
  const lessonProgress = (progressData.completedLessons / progressData.totalLessons) * 100;
  const quizProgress = (progressData.completedQuizzes / progressData.totalQuizzes) * 100;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Progress Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Progress</h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Lessons Completed</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${lessonProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {progressData.completedLessons} / {progressData.totalLessons} lessons
            </p>
          </div>
          <div>
            <p className="text-gray-600">Quizzes Completed</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${quizProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {progressData.completedQuizzes} / {progressData.totalQuizzes} quizzes
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-blue-50 p-4 rounded-lg text-center"
            >
              <span className="text-4xl">{achievement.icon}</span>
              <p className="text-lg font-medium text-gray-700 mt-2">
                {achievement.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Tasks</h2>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-gray-50 rounded-lg flex justify-between items-center"
            >
              <p className="text-gray-700">{task.task}</p>
              <p className="text-sm text-gray-500">{task.dueDate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Start a New Lesson
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Take a Quiz
        </button>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
          Connect with a Mentor
        </button>
      </div>
    </div>
  );
};

export default Dashboard;