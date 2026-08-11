import frappe


def after_install():
	"""Set DAX-specific System Settings defaults after installation."""
	# Default settings removed - no longer setting DAX operating parameters
	frappe.db.commit()
