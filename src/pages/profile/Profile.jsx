import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { FiEdit2, FiCheck, FiX } from "react-icons/fi";
import { MdEmail, MdVerified } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const auth = getAuth(app);

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [editingName, setEditingName] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(false);
  const [nameValue, setNameValue] = useState(user?.displayName || "");
  const [photoValue, setPhotoValue] = useState(user?.photoURL || "");
  const [saving, setSaving] = useState(false);

  const joinedDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const handleSaveName = async () => {
    if (!nameValue.trim()) {
      Swal.fire({ title: "Error", text: "Name cannot be empty.", icon: "error" });
      return;
    }
    setSaving(true);
    try {
      await updateProfile(auth.currentUser, { displayName: nameValue.trim() });
      setEditingName(false);
      Swal.fire({ title: "Updated!", text: "Your name has been updated.", icon: "success" });
    } catch {
      Swal.fire({ title: "Error", text: "Failed to update name.", icon: "error" });
    } finally {
      setSaving(false);
    }
  };

  const handleSavePhoto = async () => {
    if (!photoValue.trim()) {
      Swal.fire({ title: "Error", text: "Photo URL cannot be empty.", icon: "error" });
      return;
    }
    setSaving(true);
    try {
      await updateProfile(auth.currentUser, { photoURL: photoValue.trim() });
      setEditingPhoto(false);
      Swal.fire({ title: "Updated!", text: "Your profile photo has been updated.", icon: "success" });
    } catch {
      Swal.fire({ title: "Error", text: "Failed to update photo.", icon: "error" });
    } finally {
      setSaving(false);
    }
  };

  const cancelName = () => {
    setNameValue(user?.displayName || "");
    setEditingName(false);
  };

  const cancelPhoto = () => {
    setPhotoValue(user?.photoURL || "");
    setEditingPhoto(false);
  };

  return (
    <div className="relative min-h-screen">
      <img
        src="https://i.postimg.cc/13HG5KmD/191203005340-blue-zones-food.jpg"
        alt=""
        className="fixed inset-0 min-h-screen w-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative z-10 w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto py-16">
        <h2 className="text-3xl md:text-5xl font-elsie text-[#FFDE9F] text-center mb-12">
          My Profile
        </h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-4">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#FFDE9F]"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className={`w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-[#FFDE9F] items-center justify-center bg-zinc-800 ${user?.photoURL ? "hidden" : "flex"}`}
            >
              <CgProfile className="text-[#FFDE9F] text-7xl" />
            </div>
          </div>

          {user?.emailVerified && (
            <span className="flex items-center gap-1 text-green-400 text-sm font-medium">
              <MdVerified /> Verified Account
            </span>
          )}
        </div>

        {/* Info Cards */}
        <div className="flex flex-col gap-5">

          {/* Display Name */}
          <div className="bg-zinc-800 bg-opacity-80 border border-zinc-700 rounded-lg px-6 py-5">
            <p className="text-[#99A9AD] text-xs uppercase tracking-widest mb-2 font-medium">
              Display Name
            </p>
            {editingName ? (
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-[#FFDE9F] text-white text-lg outline-none py-1"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveName();
                    if (e.key === "Escape") cancelName();
                  }}
                />
                <button
                  onClick={handleSaveName}
                  disabled={saving}
                  className="text-green-400 hover:text-green-300 text-xl"
                >
                  <FiCheck />
                </button>
                <button onClick={cancelName} className="text-red-400 hover:text-red-300 text-xl">
                  <FiX />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-white text-lg font-elsie">
                  {user?.displayName || <span className="text-[#99A9AD] italic">Not set</span>}
                </p>
                <button
                  onClick={() => setEditingName(true)}
                  className="text-[#FFDE9F] hover:text-[#f0c981] text-base"
                >
                  <FiEdit2 />
                </button>
              </div>
            )}
          </div>

          {/* Email */}
          <div className="bg-zinc-800 bg-opacity-80 border border-zinc-700 rounded-lg px-6 py-5">
            <p className="text-[#99A9AD] text-xs uppercase tracking-widest mb-2 font-medium">
              Email Address
            </p>
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#FFDE9F] text-xl flex-shrink-0" />
              <p className="text-white text-lg">{user?.email || "—"}</p>
            </div>
          </div>

          {/* Photo URL */}
          <div className="bg-zinc-800 bg-opacity-80 border border-zinc-700 rounded-lg px-6 py-5">
            <p className="text-[#99A9AD] text-xs uppercase tracking-widest mb-2 font-medium">
              Profile Photo URL
            </p>
            {editingPhoto ? (
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={photoValue}
                  onChange={(e) => setPhotoValue(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="flex-1 bg-transparent border-b-2 border-[#FFDE9F] text-white text-sm outline-none py-1 placeholder:text-[#99A9AD]"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSavePhoto();
                    if (e.key === "Escape") cancelPhoto();
                  }}
                />
                <button
                  onClick={handleSavePhoto}
                  disabled={saving}
                  className="text-green-400 hover:text-green-300 text-xl"
                >
                  <FiCheck />
                </button>
                <button onClick={cancelPhoto} className="text-red-400 hover:text-red-300 text-xl">
                  <FiX />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3">
                <p className="text-white text-sm break-all">
                  {user?.photoURL || <span className="text-[#99A9AD] italic">No photo URL set</span>}
                </p>
                <button
                  onClick={() => setEditingPhoto(true)}
                  className="text-[#FFDE9F] hover:text-[#f0c981] text-base flex-shrink-0"
                >
                  <FiEdit2 />
                </button>
              </div>
            )}
          </div>

          {/* Joined date */}
          {joinedDate && (
            <div className="bg-zinc-800 bg-opacity-80 border border-zinc-700 rounded-lg px-6 py-5">
              <p className="text-[#99A9AD] text-xs uppercase tracking-widest mb-2 font-medium">
                Member Since
              </p>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-[#FFDE9F] text-lg flex-shrink-0" />
                <p className="text-white text-lg">{joinedDate}</p>
              </div>
            </div>
          )}

          {/* Sign-in provider */}
          <div className="bg-zinc-800 bg-opacity-80 border border-zinc-700 rounded-lg px-6 py-5">
            <p className="text-[#99A9AD] text-xs uppercase tracking-widest mb-2 font-medium">
              Sign-in Method
            </p>
            <div className="flex flex-wrap gap-2">
              {user?.providerData?.map((provider) => (
                <span
                  key={provider.providerId}
                  className="px-3 py-1 rounded-full text-sm border border-[#FFDE9F] text-[#FFDE9F] capitalize"
                >
                  {provider.providerId === "google.com"
                    ? "Google"
                    : provider.providerId === "password"
                    ? "Email & Password"
                    : provider.providerId}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
