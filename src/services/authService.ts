import { supabase } from "../lib/supabaseClient";

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

// email, password, firstName, lastName
export async function signUpUser(
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (error) throw error;
  return data;
}

// FORGOT PASSWORD AND PASSWORD RESET
export async function resetPasswordForEmail(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/update-password`,
  });

  if (error) throw error;
  return data;
}

export async function updateUserPassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw error;
  return data;
}
